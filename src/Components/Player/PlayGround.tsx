import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { DefaultThumbnail } from "./DefaultThumbnail";
import { usePlayer } from "./usePlayer";
import Modal from "../Modal";
import { useState, useCallback } from "react";

export const PlayGround = () => {
  const { playList, setCurrentMusic, currentMusic } = usePlayer();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <div className="w-screen h-screen overflow-auto bg-gradient-to-t from-indigo-300">
      <div className="flex flex-col max-w-lg gap-4 mx-4 md:mx-auto mt-6 mb-20">
        {playList.map((music) => {
          const isPlaying = currentMusic.src === music.src;
          return (
            <div
              key={music.id}
              onClick={() => {
                setCurrentMusic(music, true);
              }}
              className={`${isPlaying ? " border-purple-500" : "border-transparent"
                } flex gap-2 text-xs relative cursor-pointer transition-shadow duration-300 shadow-lg hover:shadow-none bg-[#27293d] rounded-2xl overflow-hidden text-white border-2 border-dashed`}
            >
              <div className="w-3/12 h-24">
                {music.thumbnail ? (
                  <img
                    className="rounded-lg h-full w-full object-cover"
                    alt={music.title}
                    src={music.thumbnail}
                  />
                ) : (
                  <DefaultThumbnail />
                )}
              </div>
              <div className="w-8/12 flex flex-col gap-2 justify-center" onClick={handleOpenModal}>
                <h6 className="font-semibold text-sm">{music.title}</h6>
                <p className="text-xs text-gray-400">{music.artist}</p>
              </div>
              <div className="w-1/12 flex justify-center items-center text-3xl bg-black/10">
                {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
              </div>

              <Modal
                isOpen={openModal}
                onClose={handleCloseModal}
                music_link={`http://localhost:3000${music.src}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
